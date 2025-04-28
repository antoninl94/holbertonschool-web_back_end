#!/usr/bin/env python3
"""
Write a coroutine called async_generator that takes no arguments.
The coroutine will loop 10 times, each time asynchronously wait 1
second, then yield a random number between 0 and 10.
Use the random module.
"""
import random
from typing import AsyncGenerator
from asyncio import sleep


async def async_generator() -> AsyncGenerator[float, None]:
    """return a random number"""
    for _ in range(10):
        yield float(random.uniform(0, 10))
        await sleep(1)
