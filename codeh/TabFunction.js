function KeyPressTab(obj){
  if(event.code !== "Tab") return true;

  event.preventDefault();

  let start = this.selectionStart;
  let end = this.selectionEnd;
  if(start === end){
    document.execCommand('insertText',false,"    ");
  }
  else{
    let strBefore = this.value.slice(0,start);
    let curLineStart = strBefore.includes('\n')?strBefore.lastIndexOf('\n')+1 : 0;
    let strBetween = this.value.slice(curLineStart,end+1);
    let newStr = "  " + strBetween.replace(/\n/g,'\n  ');
    let lineBreakCount = strBetween.split('\n').length;
    let newStart = start + 2;
    let newEnd = end + (lineBreakCount + 1)*2;

    this.setSelectionRange(curLineStart,end);
    document.execCommand("insertText",false,newStr);
    this.setSelectionRange(newStart,newEnd);
  }
}