const Follow = require('../models/follower.model')

exports.Follow = async (data) => {
  const {follower, following_to} = data;

  if(!follower || !following_to){
    throw new Error("All data are required")
  }

  // Need to check
  // Does the both users are exist or not. 
  // Does it already following
  const result = await Follow.create({follower: follower, following_to: following_to})

  return result;
}

exports.CheckFollow = async ({ follower, following_to }) => {
  if (!follower || !following_to) throw new Error("All data are required");
  const record = await Follow.findOne({ follower, following_to });
  return record ? { following: true, followId: record._id.toString() } : { following: false, followId: null };
}

exports.Unfollow = async (data) => {
  const { id } = data;

  const follow = await Follow.findOne({_id: id})

  if(!follow){
    throw new Error("Follow not found")
  }

  const result = await Follow.deleteOne({_id: id})

  return result;
}