import React from "react";
import {
  FaTelegramPlane,
  FaTiktok,
  FaRobot,
} from "react-icons/fa";
import "./App.css";

export default function App() {
  return (
    <div className="page">
      <div className="card">

        <div className="logo-wrapper">
          <img
            src={`${import.meta.env.BASE_URL}logo.jpeg`}
            alt="Мусорная озвучка"
            className="logo"
          />
        </div>

        <h1 className="title">
          МУСОРНАЯ ОЗВУЧКА
        </h1>

        <p className="subtitle">
          мы не студия — мы озвучиваем для души!
        </p>

        <div className="description">
          <span>
            Озвучиваем <strong>Дроны-Убийцы</strong> и другие комиксы
          </span>

          <FaRobot className="robot-icon" />
        </div>

        <div className="divider" />

        <div className="section">
          <p className="label">
            тгк 👇
          </p>

          <a
            href="https://t.me/Murder_Droones"
            target="_blank"
            rel="noopener noreferrer"
            className="button telegram"
          >
            <FaTelegramPlane className="button-icon" />

            <span>
              https://t.me/Murder_Droones
            </span>
          </a>

          <p className="small-text">
            добьём 2к? (54)
          </p>
        </div>

        <div className="section last-section">
          <a
            href="https://www.tiktok.com/@trash_voice"
            target="_blank"
            rel="noopener noreferrer"
            className="button tiktok"
          >
            <FaTiktok className="button-icon" />

            <span>
              мусорная озвучка (@trash_voice)
            </span>
          </a>
        </div>

      </div>
    </div>
  );
}