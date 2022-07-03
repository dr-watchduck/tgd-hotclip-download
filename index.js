function CopyUrl() {
  const el = document.createElement('textarea');
  document.body.appendChild(el);
  el.value = JSON.stringify(GetMP4Path(), null, 2);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
  // alert('url 이 복사되었습니다.');
}

function OpenUrl() {
  window.open(GetMP4Path(), "_self");
}

function GetMP4Path() {
  const content = document.querySelector(
  `head > meta:nth-child(8)`
  ).getAttribute('content');
  const url = content.split("-preview")[0]+".mp4";
  console.log(url);

  return url;
}

function DownloadBtn() {
  const el = document.createElement('button');
  el.id = 'copyBtn';
  el.style = 'width: 100%; height: 64px; text-align: center; color: black;';
  el.innerText = '다운로드';
  el.onclick = OpenUrl;
  document.body.prepend(el);
}

function CopyUrlBtn() {
  const el = document.createElement('button');
  el.id = 'copyBtn';
  el.style = 'width: 100%; height: 64px; text-align: center; color: black;';
  el.innerText = 'url 복사';
  el.onclick = CopyUrl;
  document.body.prepend(el);
}


setTimeout(() => {
  console.log("tgd-hotclip-download on");
  DownloadBtn();
  CopyUrlBtn();
}, 1000)
