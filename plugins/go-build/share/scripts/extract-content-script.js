getGoSources = () => {
    return [... document.querySelectorAll('div.toggleVisible, div.toggle')].map(elem => {
        const version = (elem.querySelector('h2').innerText.replace('go', '')).replace(' ▹', '');
        return { "version": version, "candidates": [... elem.querySelectorAll('tr')].map(row => {
            const hasAnchor = row.querySelector('a');
            if (hasAnchor) {
                if (hasAnchor.innerText.endsWith('src.tar.gz')) {
                    const checksum = row.querySelector('td:last-of-type').innerText;
                    return `# install_from_source "Go ${version} Source" "${hasAnchor.href}#${checksum}"\n`;
                }

                else if (hasAnchor.innerText.endsWith('darwin-amd64.tar.gz')) {
                    const checksum = row.querySelector('td:last-of-type').innerText;
                    return `install_darwin_64bit "Go Darwin 64-bit ${version}" "${hasAnchor.href}#${checksum}"\n`;
                }

                else if (hasAnchor.innerText.endsWith('linux-386.tar.gz')) {
                    const checksum = row.querySelector('td:last-of-type').innerText;
                    return `install_linux_32bit "Go Linux x86 32-bit ${version}" "${hasAnchor.href}#${checksum}"\n`;
                }

                else if (hasAnchor.innerText.endsWith('linux-amd64.tar.gz')) {
                    const checksum = row.querySelector('td:last-of-type').innerText;
                    return `install_linux_64bit "Go Linux x86 64-bit ${version}" "${hasAnchor.href}#${checksum}"\n`;
                }

                else if (hasAnchor.innerText.endsWith('freebsd-386.tar.gz')) {
                    const checksum = row.querySelector('td:last-of-type').innerText;
                    return `install_bsd_32bit "Go BSD x86 32-bit ${version}" "${hasAnchor.href}#${checksum}"\n`;
                }

                else if (hasAnchor.innerText.endsWith('freebsd-amd64.tar.gz')) {
                    const checksum = row.querySelector('td:last-of-type').innerText;
                    return `install_bsd_64bit "Go BSD x86 64-bit ${version}" "${hasAnchor.href}#${checksum}"\n`;
                }

                else if (hasAnchor.innerText.endsWith('linux-armv6l.tar.gz')) {
                    const checksum = row.querySelector('td:last-of-type').innerText;
                    return `install_linux_arm "Go Linux ARM v6l ${version}" "${hasAnchor.href}#${checksum}"\n`;
                }

                else if (hasAnchor.innerText.endsWith('linux-arm64.tar.gz')) {
                    const checksum = row.querySelector('td:last-of-type').innerText;
                    return `install_linux_aarch64 "Go Linux ARM 64-bit ${version}" "${hasAnchor.href}#${checksum}"\n`;
                }
            }
        }).filter(entry => entry && `${entry}`.length >= 1).join("\n") };
    })
};
JSON.stringify(getGoSources(), null, 2);