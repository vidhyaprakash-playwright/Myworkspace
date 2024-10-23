const browserVersion="Chrome"
function getBrowserVersion(){
    if(browserVersion=="Chrome"){
        let browserVersion="Firefox"
        console.log("Browser version is "+ browserVersion)
    }else{
        let browserVersion="Edge"
        browserVersion = "Opera"
        console.log("Browser version is "+ browserVersion)
    }
    console.log("Browser version is "+ browserVersion+ " Outside block, inside function")
}
getBrowserVersion()

console.log("Browser version is "+ browserVersion+ " Outside block, outside function")