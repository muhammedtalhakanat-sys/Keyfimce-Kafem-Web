import unittest
from pathlib import Path


class LiveMenuSettingsContractTests(unittest.TestCase):
    def test_customer_menu_safely_applies_published_settings(self):
        source = (Path(__file__).resolve().parents[1] / "index.html").read_text(encoding="utf-8")
        self.assertIn("KFM_LIVE_MENU_SETTINGS_DEFAULTS", source)
        self.assertIn("function kfmCanliMenuAyarlariniNormalizeEt", source)
        self.assertIn("featured_category_id", source)
        self.assertIn("remoteMenuAnnouncement", source)
        self.assertIn("#remoteMenuAnnouncement[hidden]{display:none!important}", source)
        self.assertIn("kfmCanliMenuAyarlariniUygula(liveCatalog.settings)", source)
        self.assertIn("kfmCanliMenuAyarlariniUygula(cachedCatalog.settings)", source)
        self.assertIn("/^cat-[a-z0-9][a-z0-9_-]{0,47}$/.test(featured)", source)
        self.assertIn("localStorage.getItem(TEMA_KEY)", source)


if __name__ == "__main__":
    unittest.main()
