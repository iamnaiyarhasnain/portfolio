"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

/* ── Data ──────────────────────────────────────────────────── */

const socials = [
  {
    href: "mailto:naiyarhasnain77@gmail.com",
    label: "Email",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="16" x="2" y="4" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
  },
  {
    href: "https://github.com/iamnaiyarhasnain",
    label: "GitHub",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.09.682-.217.682-.482 0-.237-.009-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.607.069-.607 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.337-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836a9.59 9.59 0 012.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
      </svg>
    ),
  },
  {
    href: "https://linkedin.com/in/naiyarhasnain",
    label: "LinkedIn",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    href: "https://x.com/iammdmasroor",
    label: "X",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    href: "https://peerlist.io/naiyarhasnain",
    label: "Peerlist",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M6.206 2h6.044a5.75 5.75 0 0 1 0 11.5H8.206v4.25a4.25 4.25 0 0 1-2 3.596V2Zm2 2v7.5h4.044a3.75 3.75 0 1 0 0-7.5H8.206Z" />
      </svg>
    ),
  },
  {
    href: "https://leetcode.com/u/iamnaiyarhasnain/",
    label: "LeetCode",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l.602.478a1.38 1.38 0 0 0 1.752-2.13l-.602-.479a4.975 4.975 0 0 0-.925-.563 5.597 5.597 0 0 0-3.808-.378L13.483 0zM19.85 15.473c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-1.39 1.386H7.108a1.378 1.378 0 1 0 0 2.756h9.404l1.338-1.336v.001l2-.849z" />
      </svg>
    ),
  },
];

const projects = [
  {
    title: "This Portfolio",
    description:
      "Handcrafted with Next.js. Warm paper textures, ink-wash borders, and scroll-driven reveals. No templates.",
    tags: ["Next.js", "CSS", "TypeScript"],
  },
  {
    title: "Java & Spring APIs",
    description:
      "First real backend work — REST APIs, authentication flows, and database layers. Learning how systems fit together.",
    tags: ["Java", "Spring Boot", "REST"],
  },
  {
    title: "The Web",
    description:
      "HTML, CSS, forms, layouts — the boring parts that make everything else possible. Obsessing over the details.",
    tags: ["HTML", "CSS", "JavaScript"],
  },
];

const education = [
  {
    title: "Master of Computer Applications (MCA)",
    place: "IIT Patna",
    detail: "Currently Pursuing · Software Development & Cloud Technologies",
  },
  {
    title: "Bachelor of Science (B.Sc.), Computer Science",
    place: "Maulana Azad National Urdu University (MANUU), Hyderabad",
    detail: "Oct 2021 – Jun 2024 · 8.82 CGPA",
  },
];

const certificates = [
  {
    title: "AI / ML Fundamentals",
    place: "AWS",
    href: "https://www.linkedin.com/posts/naiyarhasnain_aws-aiml-artificialintelligence-activity-7476859074207211521-dpJy",
  },
  {
    title: "Java Programming",
    place: "Infosys Springboard",
    href: "https://www.linkedin.com/posts/naiyarhasnain_java-infosysspringboard-certification-activity-7450072377524248577-WYYr",
  },
  {
    title: "Python Coder",
    place: "Kaggle",
    href: "https://www.kaggle.com/certification/badges/naiyarhasnain/30",
  },
  {
    title: "AI Essentials",
    place: "Google",
    href: "https://www.coursera.org/account/accomplishments/specialization/YQY66QLOLPQR",
  },
];

const skills: { name: string; icon: React.ReactNode }[] = [
  {
    name: "Java",
    icon: (
      <svg viewBox="0 0 24 24" className="skill-icon" fill="currentColor">
        <path d="M8.851 18.56s-.917.534.653.714c1.902.218 2.874.187 4.969-.211 0 0 .552.346 1.321.646-4.699 2.013-10.633-.118-6.943-1.149M8.276 15.933s-1.028.762.542.924c2.032.209 3.636.227 6.413-.308 0 0 .384.389.987.602-5.679 1.661-12.007.13-7.942-1.218M13.116 11.475c1.158 1.333-.304 2.533-.304 2.533s2.939-1.518 1.589-3.418c-1.261-1.772-2.228-2.652 3.007-5.688 0 0-8.216 2.051-4.292 6.573" />
        <path d="M19.33 20.504s.679.559-.747.991c-2.712.822-11.288 1.069-13.669.033-.856-.373.75-.89 1.254-.998.527-.114.828-.093.828-.093-.953-.671-6.156 1.317-2.643 1.887 9.58 1.553 17.462-.7 14.977-1.82M9.292 13.21s-4.362 1.036-1.544 1.412c1.189.159 3.561.123 5.77-.062 1.806-.152 3.618-.477 3.618-.477s-.637.272-1.098.587c-4.429 1.165-12.986.623-10.522-.569 2.082-1.006 3.776-.891 3.776-.891M17.116 17.584c4.503-2.34 2.421-4.589.968-4.285-.355.074-.515.138-.515.138s.132-.207.385-.297c2.875-1.011 5.086 2.981-.928 4.562 0 0 .07-.062.09-.118" />
        <path d="M14.401 0s2.494 2.494-2.365 6.33c-3.896 3.077-.889 4.832 0 6.836-2.274-2.053-3.943-3.858-2.824-5.539 1.644-2.469 6.197-3.665 5.189-7.627" />
        <path d="M9.734 23.924c4.322.277 10.959-.154 11.116-2.198 0 0-.302.775-3.572 1.391-3.688.694-8.239.613-10.937.168 0 0 .553.457 3.393.639" />
      </svg>
    ),
  },
  {
    name: "Spring Boot",
    icon: (
      <svg viewBox="0 0 24 24" className="skill-icon" fill="currentColor">
        <path d="M21.8 1.2c-.7 1.3-1.6 2.5-2.6 3.5C16.1 1.6 11.6.5 7.8 2.4 3.3 4.5 1.2 9.8 2.8 14.5c.4 1.1 1 2.2 1.7 3.1L2.2 20c-.2.2-.2.5-.1.7.2.2.4.3.7.1l2.3-2.3c3.8 3.5 9.7 3.8 13.8.6 4.7-3.6 5.5-10.4 1.8-15L22 3c.5-.5.8-1.2.8-1.8 0 0 0 0 0 0-.3 0-.6 0-1 0zM5.6 19.2c-.1-.1-.2-.2-.3-.3C1.3 14.8 1.5 8.5 5.8 4.7c3.4-3 8.3-3.2 11.9-.8-4.4-1.4-9.2.3-11.6 4.2-2.8 4.5-1.4 10.4 3 13.3.2.1.3.2.5.3-.1 0-.3 0-.4 0-1.2 0-2.5-.4-3.6-1.2l0 0c0-.1 0-.2-.1-.3zm13.1-1.5c-3.8 3.6-9.8 3.5-13.5-.2 0-.1-.1-.1-.1-.2-3.2-3.9-2.9-9.6.7-13.1.2-.2.4-.4.7-.6 3.8-3.2 9.3-3 12.9.5l0 0c3.3 3.8 3.1 9.5-.5 13-.1.2-.1.3-.2.6z" />
      </svg>
    ),
  },
  {
    name: "Spring Framework",
    icon: (
      <svg viewBox="0 0 24 24" className="skill-icon" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.5v-9l6 4.5-6 4.5z" />
      </svg>
    ),
  },
  {
    name: "Python",
    icon: (
      <svg viewBox="0 0 24 24" className="skill-icon" fill="currentColor">
        <path d="M14.31.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.83l-.67.04-.57.1-.48.16-.39.22-.31.26-.24.3-.18.33-.13.35-.09.36-.06.36-.04.35-.02.33V17.67l.07.32.12.27.18.23.24.2.3.17.35.14.4.12.43.1.47.07.5.05.53.03h4.67l.37-.04.36-.06.33-.1.3-.13.27-.17.23-.2.19-.24.15-.28.11-.31.08-.34.05-.37.02-.39V13.5l-.02-.38-.05-.34-.08-.31-.11-.27-.15-.24-.19-.2-.23-.17-.27-.14-.3-.11-.33-.09-.36-.06-.39-.04h-2.96v-1.5h3.63l.65-.02.59-.06.54-.11.47-.16.42-.22.35-.27.29-.33.22-.38.16-.43.1-.49.04-.54V4.83l-.04-.54-.1-.49-.16-.43-.22-.38-.29-.33-.35-.27-.42-.22-.47-.16-.54-.11-.59-.06-.65-.02H9.13l-.65.02-.59.06-.54.11-.47.16-.42.22-.35.27-.29.33-.22.38-.16.43-.1.49-.04.54V7.5h6.25v1.5H5.13l-.65.02-.59.06-.54.11-.47.16-.42.22-.35.27-.29.33-.22.38-.16.43-.1.49-.04.54v4.17l.04.54.1.49.16.43.22.38.29.33.35.27.42.22.47.16.54.11.59.06.65.02h.63V13.5l.04-.54.1-.49.16-.43.22-.38.29-.33.35-.27.42-.22.47-.16.54-.11.59-.06.65-.02h4.67l.65-.02.59-.06.54-.11.47-.16.42-.22.35-.27.29-.33.22-.38.16-.43.1-.49.04-.54V3.83l-.04-.54-.1-.49-.16-.43-.22-.38-.29-.33-.35-.27-.42-.22-.47-.16-.54-.11-.59-.06L14.31.18zM9.54 3.15c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM14.46 15.85c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1z" />
      </svg>
    ),
  },
  {
    name: "C++",
    icon: (
      <svg viewBox="0 0 24 24" className="skill-icon" fill="currentColor">
        <path d="M22.394 6.002L13.606.928a3.216 3.216 0 0 0-3.212 0L1.606 6.002A3.216 3.216 0 0 0 0 8.785v10.15c0 1.144.61 2.199 1.606 2.783l8.788 5.074a3.216 3.216 0 0 0 3.212 0l8.788-5.074A3.216 3.216 0 0 0 24 18.935v-10.15a3.216 3.216 0 0 0-1.606-2.783zm-10.394 13.5a5.5 5.5 0 1 1 3.89-9.39l-1.41 1.41a3.5 3.5 0 1 0 0 4.96l1.41 1.41a5.48 5.48 0 0 1-3.89 1.61zm6.5-4.5h-1v1.5h-1.5v1h1.5v1.5h1v-1.5h1.5v-1h-1.5V15zm4 0h-1v1.5H20v1h1.5v1.5h1v-1.5H24v-1h-1.5V15z" />
      </svg>
    ),
  },
  {
    name: "JavaScript",
    icon: (
      <svg viewBox="0 0 24 24" className="skill-icon" fill="currentColor">
        <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.017-.888-1.798-2.175-2.316-.54-.22-1.127-.374-1.762-.46-.635-.087-1.109-.234-1.423-.443-.314-.208-.471-.527-.471-.955 0-.462.18-.832.541-1.11.36-.277.854-.416 1.482-.416.592 0 1.08.136 1.464.407.385.27.64.673.766 1.209l2.093-.728c-.27-.822-.763-1.483-1.48-1.982-.716-.5-1.636-.75-2.76-.75-1.282 0-2.3.364-3.054 1.093-.754.728-1.131 1.677-1.131 2.846 0 1.05.342 1.884 1.026 2.502.684.618 1.666 1.028 2.946 1.23.63.1.1.18.23.24.47.14.29.21.65.21 1.07 0 .54-.2.98-.6 1.32-.4.34-.96.51-1.68.51-.78 0-1.42-.2-1.92-.6-.5-.4-.82-1-.96-1.8l-2.16.58c.28 1.16.88 2.06 1.8 2.7 1.04.74 2.12 1.11 3.24 1.11 1.48 0 2.68-.42 3.6-1.26.92-.84 1.38-1.96 1.38-3.36 0-.82-.24-1.54-.72-2.16zM8.36 21.6v-8.48h2.36v8.48H8.36z" />
      </svg>
    ),
  },
  {
    name: "TypeScript",
    icon: (
      <svg viewBox="0 0 24 24" className="skill-icon" fill="currentColor">
        <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z" />
      </svg>
    ),
  },
  {
    name: "React.js",
    icon: (
      <svg viewBox="0 0 24 24" className="skill-icon" fill="currentColor">
        <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.31 0-.592.058-.837.166-1.065.49-1.437 2.008-1.099 4.125C3.83 6.177 3 7.073 3 8.25c0 1.607 1.67 3.135 4.248 4.028-.04.296-.06.597-.06.905 0 .299.02.594.057.884C4.87 15.115 3 16.717 3 18.45c0 1.747 2.174 3.06 5.108 3.06 1.68 0 3.497-.76 5.112-2.15l-.001.001c1.62 1.394 3.44 2.149 5.118 2.149 2.934 0 5.108-1.313 5.108-3.06 0-1.733-1.87-3.334-4.705-4.383.037-.29.058-.585.058-.884 0-.308-.02-.609-.06-.905C21.33 11.385 23 9.857 23 8.25c0-1.177-.83-2.073-2.22-2.625.339-2.117-.034-3.635-1.1-4.125a1.862 1.862 0 0 0-.837-.166zm-.963 1.49c.322 0 .57.06.737.14.46.212.694.937.58 2.006a8.633 8.633 0 0 1-.24 1.295c-.697-.169-1.452-.295-2.248-.375a16.18 16.18 0 0 0-1.47-1.806c1.356-1.26 2.641-1.26 2.641-1.26zM12 3.71c.5.49.995 1.03 1.47 1.613a20.36 20.36 0 0 0-2.943.001A14.876 14.876 0 0 1 12 3.71zM8.965 2.804c.167-.08.415-.14.737-.14 0 0 1.285 0 2.64 1.26a15.81 15.81 0 0 0-1.47 1.807c-.796.08-1.55.206-2.247.375a8.633 8.633 0 0 1-.24-1.296c-.115-1.069.12-1.794.58-2.006zM4.5 8.25c0-.616.511-1.264 1.422-1.758.166.493.373 1.006.62 1.53a16.774 16.774 0 0 0-.56 1.637C4.98 9.156 4.5 8.665 4.5 8.25zm2.206 6.508a18.2 18.2 0 0 1-.604-1.627c.178.04.36.077.548.11.188.035.38.065.576.092a15.266 15.266 0 0 0-.52 1.425zm.644-3.39c.266-.55.563-1.088.89-1.606.472-.04.961-.064 1.462-.07h.596c.5.006.99.03 1.462.07.327.518.624 1.056.89 1.606.272.562.512 1.13.72 1.697a17.07 17.07 0 0 1-.72 1.698c-.266.55-.563 1.087-.89 1.606a18.61 18.61 0 0 1-1.462.07h-.596a18.788 18.788 0 0 1-1.462-.07 15.312 15.312 0 0 1-.89-1.606 17.07 17.07 0 0 1-.72-1.698c.208-.567.448-1.135.72-1.697zm8.07 1.882c-.187-.035-.38-.065-.575-.092.188.438.362.89.52 1.425a18.2 18.2 0 0 0 .604-1.627 17.008 17.008 0 0 1-.549-.106zm.545-2.5a12.87 12.87 0 0 1-.62 1.53c-.91-.494-1.422-1.142-1.422-1.758 0-.415.48-.906 1.483-1.41.197.529.386 1.074.559 1.637zm-3.963 7.25c-.5-.49-.995-1.03-1.47-1.613a20.36 20.36 0 0 0 2.943-.001 14.876 14.876 0 0 1-1.473 1.614zm3.822-.885c.697.169 1.452.295 2.248.375a16.18 16.18 0 0 0 1.47 1.806c-1.356 1.26-2.641 1.26-2.641 1.26-.322 0-.57-.06-.737-.14-.46-.212-.694-.937-.58-2.006.047-.42.126-.85.24-1.295zM19.5 18.45c0 .616-.511 1.264-1.422 1.758a12.87 12.87 0 0 1-.62-1.53c.197-.529.386-1.074.56-1.637 1.002.504 1.482.995 1.482 1.41zM12 15.3a3.236 3.236 0 1 0 0-6.472 3.236 3.236 0 0 0 0 6.472z" />
      </svg>
    ),
  },
  {
    name: "Next.js",
    icon: (
      <svg viewBox="0 0 24 24" className="skill-icon" fill="currentColor">
        <path d="M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 0 1-.364.033C7.443.346 4.25 2.185 2.228 5.012a11.875 11.875 0 0 0-2.119 5.243c-.096.659-.108.854-.108 1.747s.012 1.089.108 1.748c.652 4.506 3.86 8.292 8.209 9.695.779.25 1.6.422 2.534.525.363.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.207-.106.247-.134.219-.158-.02-.013-.9-1.193-1.955-2.62l-1.919-2.592-2.404-3.558a338.739 338.739 0 0 0-2.422-3.556c-.009-.002-.018 1.579-.023 3.51-.007 3.38-.01 3.515-.052 3.595a.426.426 0 0 1-.206.214c-.075.037-.14.044-.495.044H7.81l-.108-.068a.438.438 0 0 1-.157-.171l-.05-.106.006-4.703.007-4.705.072-.092a.645.645 0 0 1 .174-.143c.096-.047.134-.051.54-.051.478 0 .558.018.682.154.035.038 1.337 1.999 2.895 4.361a10760.433 10760.433 0 0 0 4.735 7.17l1.9 2.879.096-.063a12.317 12.317 0 0 0 2.466-2.163 11.944 11.944 0 0 0 2.824-6.134c.096-.66.108-.854.108-1.748 0-.893-.012-1.088-.108-1.747-.652-4.506-3.859-8.292-8.208-9.695a12.597 12.597 0 0 0-2.499-.523A33.119 33.119 0 0 0 11.572 0zm4.069 7.217c.347 0 .408.005.486.047a.473.473 0 0 1 .237.277c.018.06.023 1.365.018 4.304l-.006 4.218-.744-1.14-.746-1.14v-3.066c0-1.982.01-3.097.023-3.15a.478.478 0 0 1 .233-.296c.096-.05.13-.054.5-.054z" />
      </svg>
    ),
  },
  {
    name: "HTML5 & CSS3",
    icon: (
      <svg viewBox="0 0 24 24" className="skill-icon" fill="currentColor">
        <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.071-.757.541-6.028H5.745l1.64 18.331 4.603 1.277.007-.002 4.612-1.28 1.297-14.578H10.33l.201 5.752h5.07l-.397 4.504-3.219.875-3.226-.881-.199-2.498z" />
      </svg>
    ),
  },
  {
    name: "SQL",
    icon: (
      <svg viewBox="0 0 24 24" className="skill-icon" fill="currentColor">
        <path d="M12 2C6.48 2 2 3.79 2 6v12c0 2.21 4.48 4 10 4s10-1.79 10-4V6c0-2.21-4.48-4-10-4zm0 2c4.42 0 8 1.34 8 3s-3.58 3-8 3-8-1.34-8-3 3.58-3 8-3zM4 18V15.87c1.73 1.02 4.63 1.63 8 1.63s6.27-.61 8-1.63V18c0 1.1-3.58 2-8 2s-8-.9-8-2zm16-4c0 1.1-3.58 2-8 2s-8-.9-8-2v-2.13c1.73 1.02 4.63 1.63 8 1.63s6.27-.61 8-1.63V14zm0-4c0 1.1-3.58 2-8 2s-8-.9-8-2V7.87C5.73 8.89 8.63 9.5 12 9.5s6.27-.61 8-1.63V10z" />
      </svg>
    ),
  },
  {
    name: "RESTful APIs",
    icon: (
      <svg viewBox="0 0 24 24" className="skill-icon" fill="currentColor">
        <path d="M7 7H5.5v5h1.2v-1.8h.3c1.1 0 1.8-.7 1.8-1.6S8.1 7 7 7zm-.1 2.2h-.4V8h.4c.5 0 .7.3.7.6s-.2.6-.7.6zM12 7H9.9v5h2.1c1.4 0 2.2-.8 2.2-2.5S13.4 7 12 7zm-.1 4H11V8h.9c.8 0 1.2.5 1.2 1.5S12.7 11 11.9 11zM17.5 7h-3.2v5h1.2v-1.8h1.8v-1h-1.8V8h2V7zM3 3v18h18V3H3zm17 17H4V4h16v16z" />
      </svg>
    ),
  },
  {
    name: "Microservices",
    icon: (
      <svg viewBox="0 0 24 24" className="skill-icon" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="2" width="8" height="8" rx="2" />
        <rect x="14" y="2" width="8" height="8" rx="2" />
        <rect x="2" y="14" width="8" height="8" rx="2" />
        <rect x="14" y="14" width="8" height="8" rx="2" />
      </svg>
    ),
  },
  {
    name: "Docker",
    icon: (
      <svg viewBox="0 0 24 24" className="skill-icon" fill="currentColor">
        <path d="M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 00.186-.186V3.574a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m0 2.716h2.118a.187.187 0 00.186-.186V6.29a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.887c0 .102.082.186.185.186m-2.93 0h2.12a.186.186 0 00.184-.186V6.29a.185.185 0 00-.185-.185H8.1a.185.185 0 00-.185.185v1.887c0 .102.083.186.185.186m-2.954 0h2.119a.186.186 0 00.185-.186V6.29a.185.185 0 00-.185-.185H5.146a.185.185 0 00-.185.185v1.887c0 .102.083.186.185.186m5.884 2.714h2.118a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m-2.93 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186H8.1a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.954 0h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.185-.186H5.146a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.93 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.083.185.185.185M23.766 12.33c-.305-.203-.78-.344-1.282-.344-.139 0-.279.01-.418.03-.497.072-1.025.297-1.472.63-.323.242-.607.545-.845.892a5.556 5.556 0 00-1.848-1.022 9.07 9.07 0 00-3.085-.506H.61a.612.612 0 00-.61.61v.373c0 2.222.84 4.316 2.368 5.894C3.896 20.435 6.012 21.32 8.32 21.32c5.36 0 9.873-3.69 11.235-8.868.995.14 2.124-.137 2.827-.723.473-.393.74-.93.754-1.517.01-.462-.128-.85-.37-1.01" />
      </svg>
    ),
  },
  {
    name: "Kubernetes",
    icon: (
      <svg viewBox="0 0 24 24" className="skill-icon" fill="currentColor">
        <path d="M12.015.01a1.27 1.27 0 00-.59.165l-9.97 5.76A1.27 1.27 0 00.81 7.03v11.518a1.27 1.27 0 00.645 1.097l9.97 5.76a1.27 1.27 0 001.27 0l9.97-5.76a1.27 1.27 0 00.645-1.097V7.03a1.27 1.27 0 00-.645-1.096L12.7.175a1.27 1.27 0 00-.685-.165zM12 2.53l8.69 5.02v10.04L12 22.61 3.31 17.59V7.55L12 2.53zm0 3.25a6.44 6.44 0 100 12.88 6.44 6.44 0 000-12.88zm0 2.15a4.29 4.29 0 110 8.58 4.29 4.29 0 010-8.58z" />
      </svg>
    ),
  },
  {
    name: "Apache Kafka",
    icon: (
      <svg viewBox="0 0 24 24" className="skill-icon" fill="currentColor">
        <path d="M11.999 0C5.372 0 0 5.373 0 12c0 6.628 5.372 12 11.999 12 6.628 0 12.001-5.372 12.001-12 0-6.627-5.373-12-12.001-12zm-3.02 5.06a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm6.04 0a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM8.979 15.94a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm6.04 0a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM6 10.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm12 0a1.5 1.5 0 110 3 1.5 1.5 0 010-3z" />
      </svg>
    ),
  },
  {
    name: "Spring AI",
    icon: (
      <svg viewBox="0 0 24 24" className="skill-icon" fill="currentColor">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
  },
  {
    name: "AI / ML",
    icon: (
      <svg viewBox="0 0 24 24" className="skill-icon" fill="currentColor">
        <path d="M21 10.5h-1.5V9h-2v1.5H16V9h-2v1.5h-1.5V9h-2v1.5H9V9H7v1.5H5.5V9h-2v1.5H2v3h1.5V15h2v-1.5H7V15h2v-1.5h1.5V15h2v-1.5H14V15h2v-1.5h1.5V15h2v-1.5H21v-1h1v-1h-1v-1zm-15 3H4.5v-3H6v3zm4 0H8.5v-3H10v3zm4 0h-1.5v-3H14v3zm4 0h-1.5v-3H18v3z" />
      </svg>
    ),
  },
  {
    name: "DSA",
    icon: (
      <svg viewBox="0 0 24 24" className="skill-icon" fill="currentColor">
        <path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.18l6.83 3.41L12 10.97 5.17 7.59 12 4.18zM4 8.75l7 3.5v7.5l-7-3.5v-7.5zm16 0v7.5l-7 3.5v-7.5l7-3.5z" />
      </svg>
    ),
  },
  {
    name: "Git",
    icon: (
      <svg viewBox="0 0 24 24" className="skill-icon" fill="currentColor">
        <path d="M23.546 10.93L13.067.452a1.55 1.55 0 0 0-2.188 0L8.708 2.627l2.76 2.76a1.838 1.838 0 0 1 2.327 2.341l2.66 2.66a1.838 1.838 0 1 1-1.103 1.04l-2.48-2.48v6.53a1.838 1.838 0 1 1-1.512-.065V8.78a1.838 1.838 0 0 1-.998-2.41L7.629 3.64.452 10.818a1.55 1.55 0 0 0 0 2.188l10.48 10.48a1.55 1.55 0 0 0 2.186 0l10.428-10.37a1.55 1.55 0 0 0 0-2.187z" />
      </svg>
    ),
  },
];

/* ── Section Heading Component ─────────────────────────────── */

function SectionHeading({ children }: { children: string }) {
  return <h2 className="section-heading">{children}</h2>;
}

/* ── Page ──────────────────────────────────────────────────── */

export default function Home() {
  const revealRefs = useRef<HTMLElement[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );

    revealRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  function addRevealRef(el: HTMLElement | null) {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  }

  return (
    <main className="px-6 py-16 sm:px-10 sm:py-24">
      <div className="mx-auto w-full max-w-2xl">
        {/* ── Hero ──────────────────────────────────────── */}
        <header className="flex flex-col items-start gap-8 sm:flex-row sm:items-center sm:gap-10">
          <div className="avatar-ring anim-scale-in shrink-0">
            <Image
              src="/avatar.png"
              alt="Naiyar Hasnain"
              width={112}
              height={112}
              preload
              className="rounded-full object-cover"
              style={{ width: 112, height: 112 }}
            />
          </div>

          <div className="min-w-0">
            <h1 className="anim-fade-up font-serif text-[2.75rem] leading-[1.05] tracking-tight text-ink sm:text-5xl">
              Naiyar Hasnain
            </h1>

            <div className="anim-fade-up delay-2 mt-3 flex items-center gap-2 text-sm text-mute">
              <svg
                className="h-3.5 w-3.5 opacity-50"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              Bengaluru, India
            </div>

            <div className="anim-fade-up delay-3 mt-3 inline-flex items-center gap-2 rounded-full border border-ink/8 bg-wash/60 px-3 py-1.5 text-xs tracking-wide text-mute">
              <span
                className="inline-block h-1.5 w-1.5 rounded-full bg-green-500"
                style={{ animation: "dotPulse 2s ease-in-out infinite" }}
              />
              MCA @ IIT Patna · Java Full Stack & AI
            </div>
          </div>
        </header>

        {/* ── About ─────────────────────────────────────── */}
        <section className="anim-fade-up delay-4 mt-14">
          <p className="font-serif text-[1.65rem] leading-snug tracking-tight text-ink">
            Exploring <em className="italic">tech</em> and exciting with <em className="italic">AI</em>.
          </p>
          <p className="mt-5 text-[15px] leading-7 text-mute">
            I am currently pursuing a Master of Computer Applications (MCA) from IIT Patna,
            building a strong foundation in software development, cloud technologies, and modern
            application architecture. Previously, I completed my Bachelor of Science (B.Sc.) in Computer Science
            from Maulana Azad National Urdu University (MANUU).
          </p>
          <p className="mt-3 text-[15px] leading-7 text-mute">
            As a passionate Java Full Stack Developer, I design and build scalable, efficient,
            and user-centric backend systems, cloud-native solutions, and AI-powered applications.
          </p>
        </section>

        {/* ── Projects ──────────────────────────────────── */}
        <section ref={addRevealRef} className="reveal mt-20">
          <SectionHeading>Projects</SectionHeading>
          <div className="mt-8 grid gap-4">
            {projects.map((item, i) => (
              <div
                key={item.title}
                className="ink-card"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <p className="text-[15px] font-medium text-ink">
                  {item.title}
                </p>
                <p className="mt-2 text-[14px] leading-relaxed text-mute">
                  {item.description}
                </p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded bg-ink/[0.04] px-2 py-0.5 font-mono text-[11px] text-mute"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Skills ────────────────────────────────────── */}
        <section ref={addRevealRef} className="reveal mt-20">
          <SectionHeading>Skills & Tools</SectionHeading>
          <div className="mt-8 flex flex-wrap gap-2.5">
            {skills.map((skill, i) => (
              <span
                key={skill.name}
                className="skill-tag"
                style={{ transitionDelay: `${i * 30}ms` }}
              >
                {skill.icon}
                {skill.name}
              </span>
            ))}
          </div>
        </section>

        {/* ── Education (Timeline) ──────────────────────── */}
        <section ref={addRevealRef} className="reveal mt-20">
          <SectionHeading>Education</SectionHeading>
          <div className="timeline-container mt-8 ml-1">
            <div className="timeline-line" />
            <ul className="space-y-8">
              {education.map((item) => (
                <li key={item.title} className="timeline-item">
                  <div className="timeline-dot" />
                  <p className="text-[15px] font-medium text-ink">
                    {item.title}
                  </p>
                  <p className="mt-0.5 text-sm text-accent">{item.place}</p>
                  <p className="mt-1 text-[13px] text-mute">{item.detail}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ── Certificates ──────────────────────────────── */}
        <section ref={addRevealRef} className="reveal mt-20">
          <SectionHeading>Certificates</SectionHeading>
          <ul className="mt-8 divide-y divide-ink/8">
            {certificates.map((item) => (
              <li key={item.title} className="py-4 first:pt-0">
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cert-link"
                >
                  <div>
                    <span className="text-[15px]">{item.title}</span>
                    <span className="ml-2 text-sm text-mute">
                      {item.place}
                    </span>
                  </div>
                  <span className="arrow">↗</span>
                </a>
              </li>
            ))}
          </ul>
        </section>

        {/* ── Connect / Socials ─────────────────────────── */}
        <nav
          ref={addRevealRef}
          aria-label="Connect links"
          className="reveal mt-20"
        >
          <SectionHeading>Connect</SectionHeading>
          <div className="mt-8 flex flex-wrap gap-3">
            {socials.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                rel={link.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                className="social-link"
              >
                {link.icon}
                {link.label}
              </a>
            ))}
          </div>
        </nav>

        {/* ── Footer ────────────────────────────────────── */}
        <footer ref={addRevealRef} className="reveal mt-24">
          <div className="footer-divider" />
          <div className="mt-6 text-xs text-mute">
            <p>
              © {new Date().getFullYear()} Naiyar Hasnain
            </p>
          </div>
        </footer>
      </div>
    </main>
  );
}
