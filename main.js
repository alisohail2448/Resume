
function scaleCv(){
    document.body.classList.add('scale-cv')
}



function removeScale(){
    document.body.classList.remove('scale-cv')
}



let areaCv = document.getElementById('area-cv')
let resumeBtn = document.getElementById('resume-button')


let opt = {
    margin:0,
    filename:'myResume.pdf',
    image:{ type: 'jpeg', quality: 0.98 },
    html2canvas:{ scale: 4 },
    jsPDF:{ format: 'a4', orientation: 'portrait' }
  };


function generateResume(){
    html2pdf(areaCv, opt)
}

resumeBtn.addEventListener('click', ()=>{
    scaleCv();
    generateResume();

    setTimeout(removeScale, 5000)
})