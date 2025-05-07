import { useState, useEffect } from 'react';

export default function LeaderFact({ leader, facts }) {
  const [fact, setFact] = useState('');

  // 🔄 When leader changes, pick a new random fact
  useEffect(() => {
    const options = facts[leader] || [];
    if (options.length) {
      setFact(options[Math.floor(Math.random() * options.length)]);
    }
  }, [leader, facts]);

  return (
    <aside className="fact">
      <strong>{leader?.toUpperCase()}</strong> vibe fact: {fact}
    </aside>
  );
}
