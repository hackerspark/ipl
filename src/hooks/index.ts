export function getContext() {
  return {
    user: {
      name: '',
      type: ''
    }
  };
}

export function getSession({context}) {
    return {
      user: {
        name: context.user?.name,
        type: context.user?.type,
      },
    };
}
