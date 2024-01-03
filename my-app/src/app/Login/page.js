"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // ทำตรวจสอบรหัสผ่านหรือโลจินด้วยตนเอง
    if (username === "user" && password === "pass") {
      alert("Pass")
    } else {
      alert("ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง");
    }
  };

  return (
    <div className="border border-base-300">
        <h1>Login</h1>
      <div className="flex justify-center ">
      
        <label>
          ชื่อผู้ใช้:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        </div>
        <div className="flex justify-center">
        <label>
          รหัสผ่าน:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <button onClick={handleLogin}>เข้าสู่ระบบ</button>
      </div>
    </div>
  );
}
