def format_report(title, data):
    """Return a formatted report string.

    Parameters
    ----------
    title : str
        The title of the report.
    data : dict
        Dictionary containing ``count``, ``total`` and optional ``precision``.
    """
    count = data.get("count", 0)
    # Avoid division by zero and compute the percentage rate.
    rate = count / max(data.get("total", 1), 1) * 100
    # Use a separate variable for the rate so the format specifier does not
    # contain nested braces.
    report = f"Report: {title!r} | Items: {count:,} | Rate: {rate:.{data.get('precision', 2)}f}%"
    return report


def format_list(values):
    """Return a comma‑separated string of the given values.

    The original implementation attempted to use a starred expression inside
    an f‑string, which is not allowed.  The function now joins the values
    explicitly.
    """
    return f"Values: {', '.join(map(str, values))}"
