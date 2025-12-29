// src/AboutReport.js
import React from 'react';

function AboutReport({ backToHome }) {

  // 整理出的資安防護策略資料
  const strategies = [
    {
      id: 1,
      title: "非對稱加密技術 (Asymmetric Encryption)",
      icon: "🔐",
      desc: "使用一對密鑰（公鑰與私鑰）進行加密與解密，常見於 RSA、ECC 演算法。",
      pros: [
        "解決了密鑰交換的安全性問題 (不用傳送私鑰)。",
        "具備「不可否認性」(數位簽章)，可驗證發送者身分。",
        "安全性極高，破解難度隨密鑰長度指數上升。"
      ],
      cons: [
        "運算速度遠慢於對稱加密，不適合加密大量數據。",
        "密鑰管理基礎設施 (PKI) 建置與維護成本高。",
        "若私鑰遺失或被竊，無法像密碼一樣輕易重設。"
      ]
    },
    {
      id: 2,
      title: "多因子認證 (MFA)",
      icon: "📲",
      desc: "結合「你知道的(密碼)」、「你擁有的(手機/憑證)」或「你是誰(生物辨識)」來驗證身分。",
      pros: [
        "即使密碼外洩，駭客仍無法輕易登入。",
        "大幅降低帳號被暴力破解或撞庫攻擊的風險。",
        "符合零信任架構 (Zero Trust) 的基礎要求。"
      ],
      cons: [
        "使用者體驗較差，登入步驟繁瑣。",
        "依賴實體裝置（如手機沒電或遺失就無法登入）。",
        "簡訊驗證碼 (SMS OTP) 仍可能遭到攔截或 SIM 卡轉移攻擊。"
      ]
    },
    {
      id: 3,
      title: "防火牆 (Firewall)",
      icon: "🧱",
      desc: "監控並控制進出網路流量的安全系統，建立內部網路與外部網路之間的屏障。",
      pros: [
        "有效過濾未授權的網路存取與惡意封包。",
        "可隱藏內部網路結構 (NAT)，增加駭客情蒐難度。",
        "提供流量日誌，有助於資安事件的追蹤與鑑識。"
      ],
      cons: [
        "無法防禦來自「內部」的惡意攻擊或誤操作。",
        "傳統防火牆難以檢測應用層 (Application Layer) 的攻擊。",
        "若設定規則過於複雜，可能導致網路效能瓶頸。"
      ]
    },
    {
      id: 4,
      title: "資料去識別化 (De-identification)",
      icon: "🕵️",
      desc: "移除或修改個資中的識別資訊（如姓名、身分證），使其無法連結到特定個人。",
      pros: [
        "保護使用者隱私，降低資料外洩時的損害。",
        "符合個資法與 GDPR 等法規要求，利於大數據分析應用。",
        "平衡了「資料利用價值」與「個人隱私權利」。"
      ],
      cons: [
        "過度去識別化可能導致資料失去分析價值 (Utility Loss)。",
        "存在「再識別風險」(Re-identification)，透過交叉比對仍可能找出當事人。",
        "無法防止原始資料庫被直接入侵。"
      ]
    },
    {
      id: 5,
      title: "滲透測試 (Penetration Testing)",
      icon: "⚔️",
      desc: "由資安專家模擬駭客攻擊手法，主動找出系統漏洞並修補（紅隊演練）。",
      pros: [
        "能發現自動化掃描工具無法找到的邏輯漏洞。",
        "驗證現有防禦機制的有效性。",
        "提供真實的風險評估報告，協助企業決定資安預算優先級。"
      ],
      cons: [
        "測試成本高昂，且僅能反映測試當下的安全狀況。",
        "若操作不當，可能導致系統服務中斷 (DDoS 風險)。",
        "極度依賴測試人員的技術能力與經驗。"
      ]
    }
  ];

  return (
    <div className="report-container">
      <div className="report-header">
        <button className="btn-small" onClick={backToHome}>⬅ 返回首頁</button>
        <h2>🛡️ 資安防護策略：優缺點分析報告</h2>
      </div>

      <p className="report-intro">
        本報告彙整了本學期課程中探討的五大核心資安防護機制。
        沒有完美的單一防禦手段，理解各項技術的侷限性與互補性，才能建構完整的防禦縱深。
      </p>

      <div className="strategies-list">
        {strategies.map(item => (
          <div key={item.id} className="strategy-card">
            <div className="strategy-header">
              <span className="strategy-icon">{item.icon}</span>
              <h3>{item.title}</h3>
            </div>
            <p className="strategy-desc">{item.desc}</p>
            
            <div className="pros-cons-grid">
              <div className="pc-col pros-col">
                <h4>🟢 優點 (Pros)</h4>
                <ul>
                  {item.pros.map((p, idx) => <li key={idx}>{p}</li>)}
                </ul>
              </div>
              <div className="pc-col cons-col">
                <h4>🔴 缺點與限制 (Cons)</h4>
                <ul>
                  {item.cons.map((c, idx) => <li key={idx}>{c}</li>)}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="report-footer">
        <p>※ 總結：資安與倫理的平衡在於如何在便利性、效能與隱私保護之間取得最佳折衷。</p>
      </div>
    </div>
  );
}

export default AboutReport;