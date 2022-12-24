export const isCurrentUser = (currentUser: string | undefined, username: string) => {
    return currentUser !== undefined ? currentUser === username : 'current user is undefined'
  }