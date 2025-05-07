function MoodStats({ counts=0 }) {
  /* TODO #5
     - Calculate total votes
     - Determine percentages
     - Render a simple table or list
  */
  return (
    <section className="stats">
      <h2>Total votes: _</h2>
      <ul>
        <li>😊 Happy: _%</li>
        <li>😴 Tired: _%</li>
        <li>🤩 Excited: _%</li>
        <li>😐 Meh: _%</li>
      </ul>
    </section>
  );
}

export default MoodStats