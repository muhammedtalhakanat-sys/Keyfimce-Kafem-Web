import unittest
from pathlib import Path


WEB_ROOT = Path(__file__).resolve().parents[1]
INDEX_HTML = (WEB_ROOT / "index.html").read_text(encoding="utf-8")


class HappyHourRemovalTests(unittest.TestCase):
    def test_happy_hour_card_markup_style_and_timer_are_removed(self):
        for retired_marker in (
            "happyHourCard",
            "happy-hour-card",
            "renderHappyHour",
            "updateHappyHour",
            "__kfmHappyHourTimer",
            "happy_hour_title",
        ):
            self.assertNotIn(retired_marker, INDEX_HTML)

    def test_daily_suggestions_remain_available(self):
        self.assertIn("renderDailySuggestion();", INDEX_HTML)


if __name__ == "__main__":
    unittest.main()
