module.exports = (lang) => {
  return /*html*/ `
    <form class="form">
      <label>Email:</label>
      <input name="email" class="form-input" type="text" />
      <label>Password:</label>
      <input name="password" class="form-input" type="password" />
      <input type="submit" class="form-submit" value="Submit" />
    </form>
  `;
};
