import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

const Plugin = () => {
  const router = useRouter();
  const { slug } = router.query;
  const [pluginId, setPluginId] = useState(null);

  useEffect(() => {
    if (slug !== undefined) {
      setPluginId(slug[0]);
    }
  }, [slug]);

  return (
    <>
      <h1>Route Parameter: {pluginId}</h1>
    </>
  );
};

export default Plugin;
