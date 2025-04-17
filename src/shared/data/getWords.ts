import db from "./db";

export const getWordsByTale = (taleId: number) => {
  console.log("id in getWordsByTale", taleId);
  const stmt = db.prepare(`
      SELECT w.word, w.description
      FROM words w
      JOIN word_tale wt ON w.id = wt.word_id
      JOIN tales t ON wt.tale_id = t.id
      WHERE t.id = ?
    `);
  return stmt.all(taleId);
};

export const getWords = (query: string) => {
  if (!query) {
    const stmt = db.prepare("SELECT word, description FROM words");
    return stmt.all();
  }

  // SQL-запрос для поиска слов по запросу (без учета регистра)
  const stmt = db.prepare(`
    SELECT word, description 
    FROM words 
    WHERE LOWER(word) LIKE LOWER(?) 
  `);
  return stmt.all(`%${query}%`);
};

export const getWordsByFirstLetter = (letter: string) => {
  if (!letter) {
    return [];
  }

  const stmt = db.prepare(`
    SELECT word, description 
    FROM words 
    WHERE LOWER(SUBSTR(word, 1, 1)) = LOWER(?) 
  `);

  return stmt.all(letter);
};
