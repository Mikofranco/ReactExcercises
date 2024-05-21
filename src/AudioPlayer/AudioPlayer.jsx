import React, { useState, useRef } from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import "./customAudioPlayer.css"
import Layout from "./Layout";

const ReactAudioPlayer = () => {
  return (
    <>
      <Layout>
        <h1>Audio Player</h1>
        <div className="container">
          <AudioPlayer src="https://cdn.trendybeatz.com/audio/Johnny-Drille-How-Are-You-My-Friend-(TrendyBeatz.com).mp3" />
        </div>
      </Layout>
    </>
  );
};

export default ReactAudioPlayer;
