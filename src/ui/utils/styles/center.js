export default function center(axis, position = 'absolute') {
    let styles = {};

    if (axis === 'horizontal' || !axis) {
        styles.margin = 'auto';
        styles.left = 0;
        styles.right = 0
    }

    if (axis === 'vertical' || !axis) {
        styles.top = '50%';
        styles.transform = 'translateY(-50%)';
        styles.position = position;
    }

    return styles;
}