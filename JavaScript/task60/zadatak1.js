function getVoteCount(votes) {
  let result = votes.upvotes - votes.downvotes;
  return result;
}

console.log(getVoteCount({ upvotes: 2, downvotes: 33 }));
