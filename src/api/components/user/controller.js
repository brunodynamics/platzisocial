const { nanoid } = require("nanoid");

const TABLE = "user";

module.exports = (injectedStore) => {
  let store = injectedStore;
  if (!store) {
    store = require("../../../store/dummy");
  }

  const list = () => {
    return store.list(TABLE);
  };

  const get = (id) => {
    return store.get(TABLE, id);
  };

  const upsert = (body) => {
    const user = {
      name: body.name,
    };

    if (body.id) {
      user.id = body.id;
    } else {
      user.id = nanoid();
    }
    return store.upsert(TABLE, user);
  };

  return {
    list,
    get,
    upsert,
  };
};
