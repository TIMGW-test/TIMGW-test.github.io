window.onload = function () {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const curriculumName = urlParams.get('curriculum');
    console.log(curriculumName);

    fetch("curriculum.xml").then(response => {
        return response.text();
    }).then(xmlString => {
        const xmlDocument = new DOMParser().parseFromString(xmlString, "text/xml");
        console.log("xmlDocument:", xmlDocument);

        const curriculumcycles = xmlDocument.querySelectorAll('curriculumListing');
        let foundCurriculum = null;

        curriculumcycles.forEach(curriculum => {
            if (curriculum.querySelector('id').textContent === curriculumName) {
                foundCurriculum = curriculum;
                return;
            }
        });

        if (foundCurriculum) {
            const id = foundCurriculum.querySelector("id").textContent;
            const description = foundCurriculum.querySelector("description").textContent;
            const imageURL = foundCurriculum.querySelector("image").textContent;
            const title = foundCurriculum.querySelector("title").textContent;
            const pdfURL = foundCurriculum.querySelector("pdf").textContent;

            // Update HTML elements with curriculum details
            const curriculumTitleElement = document.getElementById("curriculumTitle");
            const curriculumDescriptionElement = document.getElementById("curriculumDescription");
            const curriculumImageElement = document.getElementById("curriculumImage");
            const curriculumDownloadLink = document.getElementById("downloadLink");

            curriculumTitleElement.innerText = title;
            curriculumDescriptionElement.innerText = description;
            curriculumImageElement.src = imageURL;
            curriculumDownloadLink.href = pdfURL; 
            
        } else {
            console.log("Curriculum cycle not found");
        }
    });
}
