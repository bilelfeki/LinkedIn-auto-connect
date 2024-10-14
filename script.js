function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
async function ConnectClick(button){
  xpathSendWithoutANote='/html/body/div[4]/div/div/div[3]/button[2]';
  xpathClosePopUp='/html/body/div[4]/div/div/button';
  button.click();
  await sleep(2000);  
  let ConnectButton = document.evaluate(xpathSendWithoutANote, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
  let SpanInsideConnect = ConnectButton.firstChild.textContent;
  let CloseButton = document.evaluate(xpathClosePopUp, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
  if (ConnectButton) {
    if(SpanInsideConnect.includes("send")){
      console.log('you could send an invitation')
    }
  } else {
    CloseButton.click();
  }
  CloseButton.click();
}
async function automateSent() {

  let xpathPeopleListAsString = "/html/body/div[5]/div[3]/div/div[2]/div/div[2]/main/div[2]/div/div/div[2]/div/div[1]/ul/li";
  let xpathButtonInsideListAsString ="div > section > footer > button"
  let liElements = document.evaluate(xpathPeopleListAsString, document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);

  for (let i = 0; i < liElements.snapshotLength; i++) {
    let li = liElements.snapshotItem(i);
    let button = li.querySelector(xpathButtonInsideListAsString);

    if (button) {
      if (button.innerHTML.includes('Follow')) {
        /**
         * add Click to automate Follow
         */
        console.log('follow Button here');
      }
      else {
        if (button.innerHTML.includes('Connect')) {
          /**
           * click on Connect Button
           */
          await ConnectClick(button);
        }
      }
    } 
  }

}


automateSent();