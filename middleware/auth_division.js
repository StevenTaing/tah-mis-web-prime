export default function ({ $auth, redirect, route }) {
  try {
    const user = $auth.user;
    const currentRoute = route.path.split('/')[1].toUpperCase();
    const divisions = user.access_list.split(',');

    if (user) {
      if (!divisions.includes(currentRoute)) {
        redirect(user.default_route);
      }
    }
  } catch (error) {
    console.log(error);
    redirect('/login');
  }
}
