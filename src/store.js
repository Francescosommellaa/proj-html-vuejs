import { reactive } from "vue";

export const store = reactive({
  cardOffertdirection: true,
  team: [
    {
      pic: "public/team-img-1-1.jpg",
      name: "Mike Gregg",
      role: "Web Design",
      color: "fc3",
    },
    {
      pic: "public/team-img-3.jpg",
      name: "Tabatha Fraser",
      role: "Animation",
      color: "fc1",
    },
    {
      pic: "public/team-img-6.jpg",
      name: "Alisha Selby",
      role: "Marketing manager",
      color: "fc4",
    },
    {
      pic: "public/team-img-8.jpg",
      name: "Octavia Scala",
      role: "Frontend Developer",
      color: "fc5",
    },
    {
      pic: "public/team-img-9-1.jpg",
      name: "Scott Scheetz",
      role: "Backend Developer",
      color: "fc3",
    },
    {
      pic: "public/team-img-10-1.jpg",
      name: "Barbara Thomas",
      role: "Graphic Designer",
      color: "fc1",
    },
    {
      pic: "public/team-img-11-1.jpg",
      name: "Jessie Lee",
      role: "Photographer",
      color: "fc4",
    },
    {
      pic: "public/team-img-12-1.jpg",
      name: "Jessie Lee",
      role: "Creative Director",
      color: "fc5",
    },
  ],
  illustration: [
    {
      pic: "public/h-2-port-img-1.jpg",
      title: "All these illustration",
      tip: "Illustration",
    },
    {
      pic: "public/h-2-port-img-2.jpg",
      title: "Type and Illustrations",
      tip: "Illustration",
    },
    {
      pic: "public/h-2-port-img-3.jpg",
      title: "Draw and illustrate",
      tip: "Illustration",
    },
    {
      pic: "public/h-2-port-img-4.jpg",
      title: "Illustration of novels",
      tip: "Illustration",
    },
    {
      pic: "public/h-2-port-img-5.jpg",
      title: "Too many illustrations",
      tip: "Illustration",
    },
    {
      pic: "public/h-2-port-img-6.jpg",
      title: "Dreams are illustrations",
      tip: "Illustration",
    },
  ],
  cursor() {
    // Rimuovi 'DOMContentLoaded' in quanto non necessario in un componente Vue montato
    const cursor = document.getElementById("puntatore-container");
    const cursorDot = cursor.querySelector(".puntatore");

    // Aggiorna la posizione del cursore
    document.addEventListener("mousemove", (e) => {
      cursor.style.left = `${e.clientX - 6}px`;
      cursor.style.top = `${e.clientY - 3}px`;
    });

    // Aggiungi classi in base all'hover sugli elementi desiderati
    document.querySelectorAll(".hover-area").forEach((el) => {
      el.addEventListener("mouseenter", () => {
        cursor.classList.add("general-hover");
      });
      el.addEventListener("mouseleave", () => {
        cursor.classList.remove("general-hover");
      });
    });

    document.querySelectorAll(".hover-big-area").forEach((el) => {
      el.addEventListener("mouseenter", () => {
        cursor.classList.add("big-hover");
      });
      el.addEventListener("mouseleave", () => {
        cursor.classList.remove("big-hover");
      });
    });
    document.querySelectorAll(".hover-arrow-area").forEach((el) => {
      el.addEventListener("mouseenter", () => {
        cursor.classList.add("arrow-hover");
      });
      el.addEventListener("mouseleave", () => {
        cursor.classList.remove("arrow-hover");
      });
    });

    document.querySelectorAll(".hover-footer-area").forEach((el) => {
      el.addEventListener("mouseenter", () => {
        cursor.classList.add("footer-hover");
      });
      el.addEventListener("mouseleave", () => {
        cursor.classList.remove("footer-hover");
      });
    });
    document.querySelectorAll(".hover-footer-text-area").forEach((el) => {
      el.addEventListener("mouseenter", () => {
        cursor.classList.add("footer-text-hover");
      });
      el.addEventListener("mouseleave", () => {
        cursor.classList.remove("footer-text-hover");
      });
    });
    document.querySelectorAll(".hover-footer-icon-area").forEach((el) => {
      el.addEventListener("mouseenter", () => {
        cursor.classList.add("footer-icon-hover");
        el.style.color = "white";
      });

      el.addEventListener("mouseleave", () => {
        cursor.classList.remove("footer-icon-hover");
        el.style.color = "currentcolor";
      });
    });
  },
});
