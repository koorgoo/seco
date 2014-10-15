NODEUNIT=node_modules/nodeunit/bin/nodeunit
JSHINT=node_modules/jshint/bin/jshint

test t:
	$(NODEUNIT) test

lint l:
	$(JSHINT) index.js test/test-seco.js

.PHONY: test lint
