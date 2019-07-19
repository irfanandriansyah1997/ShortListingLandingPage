export function copyToClipboard(text: string) {
    const dummy = document.createElement('input');

    document.body.appendChild(dummy);
    dummy.setAttribute('id', 'dummy_id');
    (document.getElementById('dummy_id') as HTMLInputElement).value = text;
    dummy.select();
    document.execCommand('copy');
    document.body.removeChild(dummy);
}
