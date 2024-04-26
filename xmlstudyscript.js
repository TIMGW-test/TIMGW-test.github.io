window.onload = function () {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const studyName = urlParams.get('study');
    console.log(studyName);

    fetch("bibleStudies.xml").then(response => {
        return response.text();
    }).then(xmlString => {
        const xmlDocument = new DOMParser().parseFromString(xmlString, "text/xml");
        console.log("xmlDocument:", xmlDocument);

        const bibleStudies = xmlDocument.querySelectorAll('bibleStudy');
        let foundStudy = null;

        bibleStudies.forEach(study => {
            if (study.querySelector('id').textContent === studyName) {
                foundStudy = study;
                return;
            }
        });

        if (foundStudy) {
            const id = foundStudy.querySelector("id").textContent;
            const description = foundStudy.querySelector("description").textContent;
            const imageURL = foundStudy.querySelector("image").textContent;
            const title = foundStudy.querySelector("title").textContent;
            const pdfURL = foundStudy.querySelector("pdf").textContent;

            // Update HTML elements with study details
            const studyTitleElement = document.getElementById("studyTitle");
            const studyDescriptionElement = document.getElementById("studyDescription");
            const studyImageElement = document.getElementById("studyImage");
            const studyDownloadLink = document.getElementById("downloadLink");

            studyTitleElement.innerText = title;
            studyDescriptionElement.innerText = description;
            studyImageElement.src = imageURL;
            studyDownloadLink.href = pdfURL; 
            
        } else {
            console.log("Study not found");
        }
    });
}
