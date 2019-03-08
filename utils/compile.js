export default function compile(template, ...agrs) {
    const evalExpr = /{%=(.+?)%}/g;
    const expr = /{%([\s\S]+?)%}/g;

    template = template
        .replace(evalExpr, '`); \n  renderHtml( $1 ); \n  echo(`')
        .replace(expr, '`); \n $1 \n  echo(`');

    template = 'echo(`' + template + '`);';

    const script =
        `(function parse(data){
      let output = "";
  
      function echo(html){
        output += html;
      }

      function renderHtml(html){
        let elt = document.createElement('span'); 
        elt.textContent = html;
        output += elt.innerHTML;
      }
  
      ${ template }
  
      return output;
    })`;
    const parse = eval(script);
    return parse(agrs);
}
