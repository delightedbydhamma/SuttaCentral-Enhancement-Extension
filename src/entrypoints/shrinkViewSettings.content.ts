import { querySelectorDeep } from "query-selector-shadow-dom";
import "./VpView/settingsmenu.css";

export default defineContentScript({
  matches: ["*://suttacentral.net/*"],
  main() {
    console.info("📐 shrink view menu");

    setTimeout(() => {
      const innerSetting = querySelectorDeep("#setting_menu section");

      if (innerSetting !== null) {
        innerSetting.style.display = "inline-block";
        innerSetting.style.overflowY = "scroll";
        innerSetting.style.height = "60vh";

        // not sure if the below does anything
        const labelsWithRadio = innerSetting.querySelectorAll("div.tools div.form-controls label:has(md-radio)");
        // console.log(labelsWithRadio);
        labelsWithRadio.forEach(label => {
          const labelElement = label as HTMLElement; // Cast to HTMLElement
          labelElement.style.display = "inline";
          labelElement.style.marginTop = "20px";
        });

        const alphabetSelect = innerSetting.querySelector("#selPaliScripts") as HTMLElement;
        if (alphabetSelect) {
          alphabetSelect.style.width = "inherit";
        } else {
          console.error("💥 #selPaliScripts not found");
        }

        const paliWordLookup = innerSetting.querySelectorAll(".form-controls.two-column");
        paliWordLookup.forEach(element => {
          (element as HTMLElement).style.columnCount = "1";
        });
      }
    }, 2000);
  },
});
