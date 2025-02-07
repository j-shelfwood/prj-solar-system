export type Vector = {
    x: number;
    y: number;
    z: number;
};

export default class Standard {
    /**
     * Adds two vectors
     *
     * @param v1 - The first vector
     * @param v2 - The second vector
     * @returns The sum of the two vectors
     * */
    static add(v1: Vector, v2: Vector): Vector {
        return { x: v1.x + v2.x, y: v1.y + v2.y, z: v1.z + v2.z };
    }

    /**
     * Subtracts two vectors
     *
     * @param v1 - The first vector
     * @param v2 - The second vector
     * @returns The difference of the two vectors
     * */
    static subtract(v1: Vector, v2: Vector): Vector {
        return { x: v1.x - v2.x, y: v1.y - v2.y, z: v1.z - v2.z };
    }

    /**
     * Computes the dot product of two vectors
     *
     * @param v1 - The first vector
     * @param v2 - The second vector
     * @returns The dot product of the two vectors
     * */
    static dot(v1: Vector, v2: Vector): number {
        return v1.x * v2.x + v1.y * v2.y + v1.z * v2.z;
    }

    /**
     * Computes the cross product of two vectors
     *
     * @param v1 - The first vector
     * @param v2 - The second vector
     * @returns The cross product of the two vectors
     * */
    static cross(v1: Vector, v2: Vector): Vector {
        return {
            x: v1.y * v2.z - v1.z * v2.y,
            y: v1.z * v2.x - v1.x * v2.z,
            z: v1.x * v2.y - v1.y * v2.x,
        };
    }

    /**
     * Computes the magnitude (length) of a vector
     *
     * @param v - The vector
     * @returns The magnitude of the vector
     * */
    static magnitude(v: Vector): number {
        return Math.sqrt(v.x ** 2 + v.y ** 2 + v.z ** 2);
    }

    /**
     * Normalizes a vector (makes it unit length)
     *
     * @param v - The vector
     * @returns The normalized vector
     * */
    static normalize(v: Vector): Vector {
        const mag = Standard.magnitude(v);
        return mag === 0 ? { x: 0, y: 0, z: 0 } : { x: v.x / mag, y: v.y / mag, z: v.z / mag };
    }
}