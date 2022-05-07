// Extract the domain name from a URL

// using URL object

const urls = ["http://github.com/carbonfive/raygun", "http://www.zombie-bites.com", "https://www.cnet.com", "https://youtube.com", "https://www.codegrepper.com/code-examples/javascript/how+to+check+the+domain+name+of+the+url+using+javascript"]

function domainName(url){
    let domain = new URL(url)
    let domainName = ''

    if (domain.host.slice(0, domain.host.indexOf('.')) === 'www') {
        domainName = domain.host.split('.')[1]
    }
    else {
        domainName = domain.host.slice(0, domain.host.indexOf('.')) 
    }
    
    return `domain name - "${domainName}"`
}

urls.forEach(url => {
    console.log(domainName(url))
});

