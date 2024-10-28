
export const getApiResource = async (url) => {
  try {
    const res = await fetch(url);

    if (!res.ok) {
      console.error('Could not fetch', res)
      return false;
    }

    return await res.json();
  } catch (error) {
      console.error('Could not fetch', error);
      return false;
  }
}
