export default (text) => String(text || '').toLowerCase().split(' ')
    .filter(text => !!text.trim()).map(word => word.charAt(0).toUpperCase() + word.substring(1)).join(' ');
