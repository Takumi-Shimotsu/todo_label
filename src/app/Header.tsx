"use client";

import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { useState, useEffect } from "react";

export function Header() {
  const [menuState, setMenuState] = useState(false);

  // ヘッダーの表示状態
  const [isHeaderVisible, setIsHeaderVisible] = useState(false);

  // スクロール処理
  useEffect(() => {
    //初期スクロール位置を保存
    let prevScrollPos = 0;

    // スクロールイベントが発生した時に呼び出される関数
    const handleScroll = () => {
      //現在のスクロール位置取得
      const currentScrollPos = window.scrollY;

      /* state変数に，以前のスクロール位置と現在のスクロール位置を比較
      下にスクロールすればするほど，値が高くなる
      初期位置よりも下：true
      初期位置よりも上：false
      */
      const isScrolledDown = currentScrollPos > prevScrollPos;

      // state関数で値を更新
      setIsHeaderVisible(isScrolledDown);

      // 現在のスクロール位置を前のスクロール位置として値を格納
      prevScrollPos = currentScrollPos;
    };

    // スクロールが発生した時に，関数実行
    window.addEventListener("scroll", handleScroll);

    // クリーニングする
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 w-full bg-emerald-50 shadow-sm transition-transform transform duration-500 ${
        // -transrale-y-full:上にスライドアウトして非表示
        // translate-y-0:下にスライドインして表示
        isHeaderVisible ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <div className="flex flex-row items-center gap-4">
        <h1 className="w-1/4 text-slate-600 text-4xl font-semibold pl-10 py-4">
          アプリ
        </h1>

        <div className="w-3/4">
          <ul className="flex flex-row justify-center gap-10">
            <li>
              <a href="./" className="font-semibold">
                Home
              </a>
            </li>
            <li>
              <a href="./about" className="font-semibold">
                About
              </a>
            </li>
            <li>
              <a href="./about" className="font-semibold">
                お問い合わせ
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
