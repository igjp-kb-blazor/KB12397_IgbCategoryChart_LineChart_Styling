// このファイルは、wwwroot/index.html の script タグによって読み込まれます。

// 以下は IgbCategoryChart の SeriesAddedScript パラメーターに指定する JavaScript です。
// IgbCategoryChart の各種シリーズ要素が追加されるたびに呼び出されます。
igRegisterScript("onSeriesAddedScript", (chart, context) => {

    const series = context.series;

    // series.title を参照し、シリーズ要素のタイトルに応じて線種や線の色、線幅を変更します。
    // (この例では、Europe というタイトルのシリーズ要素のみを対象に、線の色、幅、種類の変更をデモンストレーションしています。)
    // - 線種は、series の dashArray プロパティに配列を指定することで変更できます。
    // - 線の色は series の brush プロパティに HTML のカラーコード文字列を指定することで変更できます。
    // - 線の太さは series の thickness プロパティに太さを示す数値 (既定値は 2) を指定することで変更できます。
    switch (series.title) {
        case "Europe":
            series.dashArray = [10, 3, 5, 3]; // 一点破線 (―・―・―・―)
            series.brush = "#ff6060"; // 線の色を赤に変更
            series.thickness = 4; // 線の太さを 4 に変更 (デフォルトは 2)
            break;
    }

}, false);
