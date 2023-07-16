import "./css/GUI.css"

export default function GUI() {
  return (
    <div id="GUI">
      <button id="DNS-btn" className="font-OCR-A">
        DNS
      </button>
      <button id="PING-btn" className="font-OCR-A">
        PING
      </button>
      <button id="NMAP-btn" className="font-OCR-A">
        NMAP
      </button>
      <button id="TELNET-btn" className="font-OCR-A">
        TELNET
      </button>
      <button id="FILE_COPYIER-btn" className="font-OCR-A">
        FILE COPYIER
      </button>
      <button id="FILE_DELETER-btn" className="font-OCR-A">
        FILE DELETER
      </button>
      <button id="VCK-btn" className="font-OCR-A">
        VCK
      </button>
      <button id="JOHN_RIPPER-btn" className="font-OCR-A">
        JOHN RIPPER
      </button>
      <div id="missions">
        <div className="title-label font-OCR-A">Missions</div>
        {/* grid 4x3 */}
        <div id="missions-numbers">
          <div className="mission-no">1</div>
          <div className="mission-no">2</div>
          <div className="mission-no">3</div>
          <div className="mission-no">4</div>
          <div className="mission-no">5</div>
          <div className="mission-no">6</div>
          <div className="mission-no">7</div>
          <div className="mission-no">8</div>
          <div className="mission-no">9</div>
          <div className="mission-no">10</div>
          <div className="mission-no">11</div>
          <div className="mission-no">12</div>
        </div>
      </div>
      <div id="lives" className="font-OCR-A">
        <div className="title title-label font-OCR-A">Lives: 3</div>
      </div>
      <button id="HELP-btn" className="font-OCR-A">
        HELP
      </button>
      <button id="SHUTDOWN-btn" className="font-OCR-A">
        SHUTDOWN
      </button>
    </div>
  );
}
