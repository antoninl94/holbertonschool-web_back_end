#!/usr/bin/env python3
"""
Type-annotated function sum_mixed_list which takes a list mxd_lst
of integers and floats and returns their sum as a float.
"""
from typing import List, Union


def sum_mixed_list(input_list: List[Union[float, int]]) -> float:
    """Add all float and integers of a list and return the result"""
    sum = 0.0
    for x in input_list:
        sum += x
    return sum
