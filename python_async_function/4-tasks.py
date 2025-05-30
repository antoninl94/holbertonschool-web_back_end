#!/usr/bin/env python3
"""
Take the code from wait_n and alter it into
a new function task_wait_n. The code is nearly
identical to wait_n except task_wait_random is
being called.
"""
from typing import List
from asyncio import create_task, as_completed
task_wait_random = __import__('3-tasks').task_wait_random


async def task_wait_n(n: int, max_delay: int) -> List[float]:
    """Return the list of all the delays"""
    delay_list = []
    tasks = [task_wait_random(max_delay) for _ in range(n)]
    for task in as_completed(tasks):
        delay = await task
        delay_list.append(delay)
    return delay_list
