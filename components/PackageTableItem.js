export default function PackageTableItem(item) {
    return <tr key={item.identifier}>
        <td>{item.fileName}</td>
        <td>{item.formatId}</td>
        <td>{item.size}</td>
        <td><a className="button" rel="noopener" href={item.dataUrl}>Download</a></td>
    </tr>
}
