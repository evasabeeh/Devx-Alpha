/**
 * Read-only Rating Component
 * @param {number} value - The rating value (e.g., 3.5)
 * @param {number} [max=5] - The maximum rating value
 */

import { IoStar, IoStarHalf, IoStarOutline } from "react-icons/io5";

export default function Rating({
    value,
    max = 5,
}: {
    value: number;
    max?: number;
}) {
    return (
        <div
            role="img"
            aria-label={`Rating: ${value} out of ${max}`}
            className="inline-flex text-2xl text-amber-400"
        >
            {Array.from({ length: max }, (_, i) => {
                const full = i < Math.floor(value);
                const half = !full && i < value;
                return (
                    <span key={i}>
                        {full ? (
                            <IoStar />
                        ) : half ? (
                            <IoStarHalf />
                        ) : (
                            <IoStarOutline />
                        )}
                    </span>
                );
            })}
        </div>
    );
}
