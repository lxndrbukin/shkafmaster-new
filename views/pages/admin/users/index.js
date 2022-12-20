const layout = require('../../../layout');

module.exports = ({ req }) => {
  const { users } = req;
  const renderedUsers = users
    .map((user) => {
      return /*html*/ `
        <div>${user.userId}</div>
      `;
    })
    .join('');

  return layout({
    content: /*html*/ `
      <div class="users-list">
        ${renderedUsers}
      </div>
    `,
    req,
  });
};
