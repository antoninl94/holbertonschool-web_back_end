#!/usr/bin/env python3
"""
Write a Python function that changes all topics
of a school document based on the name:

Prototype: def update_topics(mongo_collection, name, topics):
mongo_collection will be the pymongo collection object
name (string) will be the school name to update
topics (list of strings) will be the list of
topics approached in the school
"""
import pymongo


def update_topics(mongo_collection, name, topics):
    """
    changes all topics of a school
    document based on the name
    """
    school_name = {"name": name}
    update_data = {"$set": {"topics": topics}}
    result = mongo_collection.update_many(school_name, update_data)
    return result.modified_count
