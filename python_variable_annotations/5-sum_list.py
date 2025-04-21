#!/usr/bin/env python3
"""
type-annotated function sum_list which takes a list
input_list of floats as argument and returns their sum as a float.
"""
from typing import List


def sum_list(input_list: List[float]) -> float:
    """Add all float of a list and return the result"""
    sum = 0.0
    for x in input_list:
        sum += x
    return sum
