module.exports = {
  createUserAccount: `
      INSERT INTO users(
        first_name,
        last_name,
        email
      )
      VALUES($/first_name/, $/last_name/, LOWER(TRIM($/email/)))
      RETURNING first_name, last_name, email`,

  getAccount: `
      SELECT * FROM users WHERE (email = LOWER(TRIM($1)) OR id = $1) LIMIT 1
  `,

};
