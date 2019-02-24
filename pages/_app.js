import React from 'react'
import App, { Container } from 'next/app'
import fetch from 'isomorphic-fetch';
import {DOMParser} from 'xmldom';

const isServer = typeof window === 'undefined'
const clientStore = isServer ? null : {}

// TODO: Factor this out so cold start is fast again. The app should be able to
// load this after initial paint.
async function fetchAppData() {
  let response = await fetch(process.env.api_base + 'node');
  let text = await response.text();
  var parser = new DOMParser();
  var doc = parser.parseFromString(text, "application/xml");
  var nodes = doc.getElementsByTagName('node');

  let parsedNodes = [];

  for (let i = 0; i < nodes.length; i++) {
    parsedNodes.push({
      id: nodes.item(i).getElementsByTagName('identifier')[0].textContent,
      name: nodes.item(i).getElementsByTagName('name')[0].textContent
    })
  }

	return {
    nodes: parsedNodes
  }
}

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    
    let pageProps = {}

    let appData = clientStore ? clientStore.appData : await fetchAppData()

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { appData, pageProps}
  }

  constructor (props) {
    super(props)

    if (clientStore && !clientStore.appData) {
			clientStore.appData = props.appData
		}
  }

  render () {
    const { Component, pageProps } = this.props
    return (
      <Container>
        <Component {...pageProps} appData={this.props.appData}/>
      </Container>
    )
  }
}

export default MyApp
