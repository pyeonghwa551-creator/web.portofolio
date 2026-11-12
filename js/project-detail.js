const projects = {
    "1": {
        title: "ART 1",
        image: "assets/img/art-1.png",
        alt: "Karya seni digital ART 1",
        description: "Karya seni digital yang dibuat menggunakan berbagai teknik dan gaya."
    },
    "2": {
        title: "ART 2",
        image: "assets/img/art-2.jpeg",
        alt: "Studi karakter dari tampak depan, samping, dan belakang",
        description: "Studi karakter dengan eksplorasi bentuk dari beberapa sudut pandang."
    },
    "3": {
        title: "ART 3",
        image: "assets/img/art-3.png",
        alt: "Ilustrasi potret digital berambut merah muda",
        description: "Ilustrasi potret digital dengan warna cerah dan detail ekspresif."
    }
};

const requestedProject = new URLSearchParams(window.location.search).get("id");
const project = projects[requestedProject];
const title = document.getElementById("project-title");
const description = document.getElementById("project-description");
const image = document.getElementById("project-image");

if (project) {
    title.textContent = project.title;
    description.textContent = project.description;
    image.src = project.image;
    image.alt = project.alt;
    document.title = `${project.title} | Bilqis Khalisa`;
} else {
    title.textContent = "Proyek tidak ditemukan";
    description.textContent = "Pilih salah satu proyek dari halaman portfolio.";
    image.hidden = true;
}
