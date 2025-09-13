import { Button, Flex } from "@chakra-ui/react";

export function App() {
  return (
    <Flex>
      <Button
        onClick={() => {
          console.log("asd");
        }}
      >
        Click
      </Button>
    </Flex>
  );
}

export default App;
