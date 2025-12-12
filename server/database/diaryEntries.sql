DROP TABLE IF EXISTS diary;

CREATE TABLE diary (
    diary_id INT GENERATED ALWAYS AS IDENTITY,
    created TIMESTAMP default CURRENT_TIMESTAMP,
    title VARCHAR(50) NOT NULL,
    content VARCHAR(300),
    PRIMARY KEY (diary_id)
);

INSERT INTO diary (title, content, created)
VALUES
(
  'Morning Thoughts',
  'Woke up early and had a quiet start to the day. The weather was calm and everything felt unhurried.',
  '2025-01-10 07:45:00'
),
(
  'Busy Afternoon',
  'Spent most of the afternoon getting through errands and catching up on things I had put off.',
  '2025-01-10 15:30:00'
),
(
  'Evening Walk',
  'Went for a short walk in the evening and cleared my head. It was colder than expected.',
  '2025-01-11 18:10:00'
),
(
  'A Productive Day',
  'Managed to stay focused and complete most of what I planned. Felt good to make progress.',
  '2025-01-12 16:00:00'
),
(
  'Late Night Reflections',
  'Ended the day feeling tired but content. Looking forward to a slower pace tomorrow.',
  '2025-01-13 23:05:00'
);
