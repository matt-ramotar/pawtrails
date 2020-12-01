const GET_TAGS = 'tags/GET_TAGS';

export const getTags = async () => {
  const res = await fetch('/api/tags');
  if (res.ok) {
    const tags = await res.json();
    return tags;
  }
};

export const listTags = async () => {
  const res = await getTags();
  return await Promise.all(res.tags.map(async tag => tag.tag));
};
